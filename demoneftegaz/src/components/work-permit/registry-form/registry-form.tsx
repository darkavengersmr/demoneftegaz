import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { IPerson, IWorkPermit } from "../../../interfaces/interfaces";

import { localizedTextsMap } from "../../../localization/mui-datagrid"

/*
    id: number
    journal: string
    number: string
    create_date: string
    create_time: string
    process_departament: string
    person_issued: number
    person_received: number
    workplace: string
    work_nature: string
    status: string
    complete_date: string
    complete_time: string
*/

type WorkPermitRegistryProps = {
    workPermitRegistry: IWorkPermit[], 
    personById: (id: number) => IPerson | undefined,
    title: string
}

const WorkPermitRegistryForm = ({workPermitRegistry, personById, title}: WorkPermitRegistryProps) => {

  const columns: GridColDef[] = [
    {
      field: 'number',
      headerName: 'Номер',
      width: 140,
      editable: false,
    },
    {
      field: 'create_date',
      headerName: 'Дата создания',    
      width: 140,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => 
        `${params.row.create_date} ${params.row.create_time}`
    },
    {
      field: 'person_issued',
      headerName: 'Выдал',
      width: 200,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => {
        const person = personById(params.row.person_issued)
        if (person) return `${person.surname} ${person.name} ${person.patronymic}`
      }          
    },
    {
      field: 'person_received',
      headerName: 'Получил',
      width: 200,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => {
        const person = personById(params.row.person_received)
        if (person) return `${person.surname} ${person.name} ${person.patronymic}`
      }          
    },
    {
      field: 'process_departament',
      headerName: 'Цех/участок',    
      width: 140,
      editable: false,
      
    },
    {
      field: 'status',
      headerName: 'Статус',    
      width: 100,
      editable: false,
      
    },
    {
      field: 'workplace',
      headerName: 'Место проведения работ',    
      width: 180,
      editable: false,      
    },
    {
      field: 'work_nature',
      headerName: 'Характер работ',    
      width: 180,
      editable: false,      
    },
    {
      field: 'complete_date',
      headerName: 'Дата возврата',    
      width: 140,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => 
        `${params.row.complete_date} ${params.row.complete_time}`
    },
  ];

  return (
    <>
    <Typography variant="h5" sx={{m: 4}}>{title}</Typography>

    <Box sx={{ m: 2, height: 500}}>
      <DataGrid
        rows={workPermitRegistry}
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
  
export default WorkPermitRegistryForm;