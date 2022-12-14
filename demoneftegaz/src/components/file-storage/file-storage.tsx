import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import { localizedTextsMap } from "../../localization/mui-datagrid"
import { IFileStorage, INewFileStorage, IPerson, IUser } from "../../interfaces/interfaces";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import React, { useState } from "react";
import { useInput } from "../../hooks";
import system from "../../store/system";

const multiline = (params: GridRenderCellParams<any, any, any>) => (
    <div>
      <Typography sx={{ mr: 1, mb: 2}}>{params.value}</Typography>
    </div>
  )

type FileStorageProps = {
    storage: IFileStorage[],
    personById: (id: number) => IPerson | undefined,
    user: IUser,
    title: string,
    add: (file: INewFileStorage) => void,
    remove: (id: string) => void,
    meta: string[]
    imgOptional?: string
    library?: string
}

type customKeys = {
    [key: string]: string
}

const newMeta = (meta: string[]): customKeys => {
    const res = {} as customKeys
    for (const key of meta) {        
        res[key] = ""
      }
    return res
}

const FileStorage = ({storage, 
                      user, 
                      personById, 
                      title, 
                      add, 
                      remove, 
                      meta,
                      library, 
                      imgOptional}: FileStorageProps) => {

    const [newFileMeta, setNewFileMeta] = useState(newMeta(meta))
    const [newFileTitle, newFileTitleActions] = useInput("", "notNullText")   

    const [open, setOpen] = useState(false);

    const updateMeta = (title: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const res = {} as customKeys
        res[title] = e.target.value
        setNewFileMeta({...newFileMeta, ...res})
    }

    const handleClickAdd = () => {
        setOpen(true);
    };

    const handleClickUpload = () => {
        if (newFileTitle.value.length>0) {
            add({
                title: newFileTitle.value,
                filename: newFileTitle.value,
                meta: newFileMeta,
                library: library ? library : title, 
                owner: user.id
            })
            system.sendNotification("???????? ??????????????????", "success")
            setNewFileMeta(newMeta(meta))
            newFileTitleActions.setInputValue("")  
            setOpen(false);  
        } else {
            system.sendNotification("???? ?????????????????? ???????????????????????? ????????", "error")  
        }
        
    };

    const handleClose = () => {
        setOpen(false);
        setNewFileMeta(newMeta(meta))
    };

    const metainfoColumns = meta.map(info => {
        return {
        field: info,
        headerName: info,
        width: 180,
        editable: false,        
        valueGetter: (params: GridValueGetterParams) => 
            params.row.meta[info] ? params.row.meta[info] : "",
        renderCell: (params: GridRenderCellParams<any, any, any>) => multiline(params),
    }})

    const columns: GridColDef[] = [
        {
            field: 'icon',
            headerName: ' ',
            width: 40,
            editable: false,
            renderCell: (params) => (
                <a href="/new"><SaveAltIcon/></a>
              )   
          },
        {
          field: 'title',
          headerName: '????????????????',
          width: 400,
          editable: false,
          renderCell: (params) => multiline(params)
        },
        {
          field: 'filename',
          headerName: '????????',
          width: 250,
          editable: false,  
          renderCell: (params) => multiline(params)
        },
        ...metainfoColumns,
        {
          field: 'owner',
          headerName: '????????????????',    
          width: 160,
          editable: false,
          valueGetter: (params: GridValueGetterParams) => {
            const person = personById(params.row.owner)
            return `${person?.surname} ${person?.name} ${person?.patronymic}`
          },
          renderCell: (params) => multiline(params)   
        },
        {
          field: 'create_date_time',
          headerName: '????????/?????????? ????????????????',    
          width: 150,
          editable: false,
          renderCell: (params) => multiline(params)   
        },
      
      ];

  return (
    <>

    <Grid container justifyContent="space-between">

    {
        !imgOptional &&
        <Typography variant="h5" sx={{mt: 4, ml: 4, mb: 2}}>{title}</Typography>
    }
    
    {
        imgOptional &&
        <>
        <Typography variant="h5" sx={{mt: 15, ml: 4, mb: 2}}>{title}</Typography>
        <Box sx={{ ml: 4, mr:4, mb: 0, mt: 2, height: 150}}>
            <img
                src={`${imgOptional}?w=248`}
                srcSet={`${imgOptional}?w=248&dpr=2 2x`}                
                height="100%"
                alt={title}
                loading="lazy"
            />
        </Box>
        </>
    }
    </Grid>
    
    

    <Box sx={{ ml: 4, mr:4, mb: 0, mt: 2, height: 600}}>
      <DataGrid
        rows={storage}
        columns={columns}
        pageSize={10}     
        getRowHeight={() => 'auto'}           
        rowsPerPageOptions={[10]}             
        experimentalFeatures={{ newEditingApi: true }}        
        localeText={{
            MuiTablePagination: {
              labelDisplayedRows: ({ from, to, count }) =>
                `???????????????? ${from} - ${to} ???? ${count} ??????????????`,                               
            },
            footerRowSelected: count => {
                let pluralForm = '?????????? ??????????????';
                const lastDigit = count % 10;
            
                if (lastDigit > 1 && lastDigit < 5) {
                  pluralForm = '???????????? ??????????????';
                } else if (lastDigit === 1) {
                  pluralForm = '???????????? ??????????????';
                }
            
                return `${count} ${pluralForm}`;
              },
            ...localizedTextsMap           
          }}
      />
    </Box>
    <Grid container justifyContent="flex-start">
        <Button
            variant="contained"
            component="label"        
            sx={{ mt: 1, mb: 10, ml: 4, justifyContent: "start" }} 
            onClick={()=>handleClickAdd()}
            >
                ???????????????? ????????                
        </Button>
    </Grid>    

    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ???????????????? ?????????? ????????
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ???????????? ?????? ?????????????????? ???????? ?? ???????? ???????????????????? ???????????????? ????????????????. 
            ?????? ???????????????? ???????????? ?????????????????????? ?????????? ?????? ????????????????.
          </DialogContentText>
          
          <TextField                  
                label="???????????????? ??????????????????"
                sx={{ mt: 1, width: "100%" }}
                {...newFileTitle}               
            />

          {
            meta.map((title) => (
            
            <TextField
                key={title}                
                label={title}            
                sx={{ mt: 1, width: "100%" }}
                value={newFileMeta[title]}
                onChange={(e)=>updateMeta(title, e)}                
            />
            ))
          }
          
          <Button
            variant="contained"
            component="label"        
            sx={{ mt: 1, justifyContent: "start" }} 
            >
                ???????????????? ????????
                <input
                    type="file"
                    hidden
                />
        </Button>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" sx={{mb: 2}} onClick={handleClose}>????????????</Button>
          <Button variant="contained" sx={{mr: 2, mb: 2}} onClick={handleClickUpload}>????????????????</Button>
        </DialogActions>
      </Dialog>

    </>
    )
}
  
export default FileStorage;