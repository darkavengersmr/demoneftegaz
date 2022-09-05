import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, GridValueSetterParams } from '@mui/x-data-grid';
import { IVisitorRequest } from "../../../interfaces/interfaces";

import { localizedTextsMap } from "../../../localization/mui-datagrid"

const columns: GridColDef[] = [
  {
    field: '_apply',
    headerName: 'Пропуск',  
    type: 'boolean',
    width: 80,
    editable: true,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.apply,
    valueSetter: (params: GridValueSetterParams) => {
        const apply = params.value;
        return { ...params.row, apply };
    },
  },
  {
    field: 'number',
    headerName: 'Номер заявки',
    width: 100,
    editable: false,
  },
  {
    field: 'date',
    headerName: 'Дата посещения',    
    width: 120,
    editable: false,
  },
  {
    field: 'time_in',
    headerName: 'Время входа',    
    width: 100,
    editable: false,
  },
  {
    field: 'time_out',
    headerName: 'Время выхода',    
    width: 100,
    editable: false,
  },
  {
    field: 'visitorList',
    headerName: 'ФИО посетителя(ей)',    
    width: 200,
    editable: false,
  },
  {
    field: 'justification',
    headerName: 'Обоснование',    
    width: 320,
    editable: false,
  },
  {
    field: 'visitorType',
    headerName: 'Тип посетителя',
    width: 220,
    editable: false,    
  },

];

type VisitorsTypeProps = {
    visitors: IVisitorRequest[],
    title: string
}

const VisitorRequestRegistryForm = ({visitors, title}: VisitorsTypeProps) => {
  return (
    <>
    <Typography variant="h5" sx={{m: 4}}>{title}</Typography>

    <Box sx={{ m: 2, height: 500}}>
      <DataGrid
        rows={visitors}
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
  
export default VisitorRequestRegistryForm;