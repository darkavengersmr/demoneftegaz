import { Button, Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import { localizedTextsMap } from "../../localization/mui-datagrid"
import { IFileStorage, IPerson, IUser } from "../../interfaces/interfaces";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Container } from "@mui/system";

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
    add: (file: IFileStorage) => void,
    remove: (id: string) => void,
    meta: string[]
}

const FileStorage = ({storage, user, personById, title, add, remove, meta}: FileStorageProps) => {

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
          headerName: 'Название',
          width: 400,
          editable: false,
          renderCell: (params) => multiline(params)
        },
        {
          field: 'filename',
          headerName: 'Файл',
          width: 250,
          editable: false,
          renderCell: (params) => multiline(params)   
        },
        ...metainfoColumns,
        {
          field: 'owner',
          headerName: 'Владелец',    
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
          headerName: 'Дата/время создания',    
          width: 150,
          editable: false,
          renderCell: (params) => multiline(params)   
        },
      
      ];

  return (
    <>
    <Typography variant="h5" sx={{mt: 5, ml: 4}}>{title}</Typography>
    <Grid container justifyContent="flex-end">
        <Button
            variant="contained"
            component="label"        
            sx={{ mt: 4, mr: 4, justifyContent: "end" }} 
            >
                Добавить файл
                <input
                    type="file"
                    hidden
                />
        </Button>
    </Grid>    
    <Box sx={{ ml: 4, mr:4, mb: 4, mt: 2, height: 600}}>
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
                `показаны ${from} - ${to} из ${count} страниц`,                               
            },
            footerRowSelected: count => {
                let pluralForm = 'строк выбрано';
                const lastDigit = count % 10;
            
                if (lastDigit > 1 && lastDigit < 5) {
                  pluralForm = 'строки выбраны';
                } else if (lastDigit === 1) {
                  pluralForm = 'строка выбрана';
                }
            
                return `${count} ${pluralForm}`;
              },
            ...localizedTextsMap           
          }}
      />
    </Box>
    </>
    )
}
  
export default FileStorage;