import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import { IBacklogRequestClass, IPerson } from "../../../interfaces/interfaces";
import { localizedTextsMap } from "../../../localization/mui-datagrid"

const multiline = (params: GridRenderCellParams<any, any, any>) => (
  <div>
    <Typography sx={{ mr: 1, mb: 2}}>{params.value}</Typography>
  </div>
)

type BacklogTypeProps = {
    backlog: IBacklogRequestClass
    personById: (id: number) => IPerson | undefined
    title: string
}

const BacklogRequestRegistryForm = ({backlog, title, personById}: BacklogTypeProps) => {

  const columns: GridColDef[] = [
    {
      field: 'requirement',
      headerName: 'Запрос на доработку',
      width: 500,
      editable: false,
      renderCell: (params) => multiline(params)  
    },
    {
      field: 'status',
      headerName: 'Статус запроса',    
      width: 300,
      editable: false,
      renderCell: (params) => multiline(params)
    },
    {
      field: '_owner',
      headerName: 'Инициатор',
      width: 200,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => {
        const person = personById(params.row.owner)
        if (person) return `${person.surname} ${person.name} ${person.patronymic}`
      }          
    },
    {
      field: 'create_date',
      headerName: 'Дата создания',    
      width: 160,
      editable: false,
    },
    {
      field: 'create_time',
      headerName: 'Время создания',    
      width: 160,
      editable: false,
    },
  ];
  
  return (
    <>
    <Typography variant="h5" sx={{m: 4}}>{title}</Typography>

    <Box sx={{ m: 2, height: 500}}>
      <DataGrid
        rows={backlog.getAll()}        
        getRowHeight={() => 'auto'}           
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}             
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
  
export default BacklogRequestRegistryForm;