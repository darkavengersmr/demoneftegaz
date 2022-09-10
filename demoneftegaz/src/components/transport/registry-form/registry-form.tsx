import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { IPerson, ITransport } from "../../../interfaces/interfaces";

import { localizedTextsMap } from "../../../localization/mui-datagrid"

/*
    id: number
    number: string
    create_date: string
    create_time: string
    person: number    
    justification: string
    absense_date_in: string
    absense_date_out: string
    absense_time_in: string
    absense_time_out: string
    status: string
    owner: number
    agreement_person: number
    agreement_date: string
    agreement_time: string
    car: string
    driver: string
    description: string
*/

type TransportRequestRegistryFormProps = {
    transportRegistry: ITransport[], 
    personById: (id: number) => IPerson | undefined,
    title: string    
}

const TransportRequestRegistryForm = ({transportRegistry, personById, title}: TransportRequestRegistryFormProps) => {

  const columns: GridColDef[] = [
    {
      field: 'number',
      headerName: 'Номер',
      width: 80,
      editable: false,
    },
    {
      field: 'date',
      headerName: 'Дата поездки',    
      width: 90,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => 
        `${params.row.date}`
    },
    {
      field: 'time',
      headerName: 'Время поездки',    
      width: 100,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => 
        `${params.row.time_in}-${params.row.time_out}`
    },
    {
      field: 'person',
      headerName: 'ФИО',
      width: 180,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => {
        const person = personById(params.row.person)
        if (person) return `${person.surname} ${person.name} ${person.patronymic}`
      }          
    },
    {
      field: 'status',
      headerName: 'Статус',    
      width: 120,
      editable: false,
      
    },
    {
      field: 'car',
      headerName: 'Назначена машина/водитель',    
      width: 360,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => 
        `${params.row.car} ${params.row.driver} ${params.row.description}`
    },
    {
      field: 'agreement',
      headerName: 'Согласующий',
      width: 180,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => {
        const person = personById(params.row.agreement_person)
        if (person) return `${person.surname} ${person.name} ${person.patronymic}`
      }          
    },
    {
      field: 'justification',
      headerName: 'Обоснование',    
      width: 240,
      editable: false,
      
    },
    {
      field: 'datetime',
      headerName: 'Дата создания',    
      width: 160,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => 
        `${params.row.create_date} ${params.row.create_time}`
    },

  ];

  return (
    <>
    <Typography variant="h5" sx={{m: 4}}>{title}</Typography>

    <Box sx={{ m: 2, height: 500}}>
      <DataGrid
        rows={transportRegistry}
        columns={columns}
        pageSize={7}        
        //getRowHeight={() => 'auto'}        
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
  
export default TransportRequestRegistryForm;