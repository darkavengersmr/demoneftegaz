import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { IAskChief } from "../../../interfaces/interfaces";

import { localizedTextsMap } from "../../../localization/mui-datagrid"

const multiline = (params: GridRenderCellParams<any, any, any>) => (
    <div>
      <Typography sx={{ mr: 1, mb: 2}}>{params.value}</Typography>
    </div>
  )

const columns: GridColDef[] = [
  {
    field: 'title',
    headerName: 'Тема',
    width: 200,
    editable: false,
    renderCell: (params) => multiline(params)   
  },
  {
    field: 'question',
    headerName: 'Вопрос',    
    width: 400,
    editable: false,
    renderCell: (params) => multiline(params)   
  },
  {
    field: 'question_category',
    headerName: 'Категория',    
    width: 100,
    editable: false,
    renderCell: (params) => multiline(params)   
  },
  {
    field: 'status',
    headerName: 'Статус ответа',    
    width: 150,
    editable: false,
    renderCell: (params) => multiline(params)   
  },
  {
    field: 'answer',
    headerName: 'Ответ Генерального Директора',    
    width: 400,
    editable: false,
    renderCell: (params) => multiline(params)      
  },
  {
    field: 'create_date',
    headerName: 'Дата',    
    width: 400,
    editable: false,
    renderCell: (params) => multiline(params)      
  }

];

type AskChiefTypeProps = {
    askChiefRequests: IAskChief[]
}

const AskChiefRequestRegistryForm = ({askChiefRequests}: AskChiefTypeProps) => {
  return (
    <>
    <Typography variant="h5" sx={{m: 4}}>Вопросы Генеральному Директору</Typography>

    <Box sx={{ m: 2, height: 500}}>
      <DataGrid
        rows={askChiefRequests}
        columns={columns}
        pageSize={7}     
        getRowHeight={() => 'auto'}           
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
  
export default AskChiefRequestRegistryForm;