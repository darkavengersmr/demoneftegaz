import { Button, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useState } from "react";
import { IPerson, IWorkAbsenseWeekend } from "../../../interfaces/interfaces";
import system from "../../../store/system";
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
*/

type WorkAbsenseRegistryProps = {
    workAbsenseRegistry: IWorkAbsenseWeekend[], 
    personById: (id: number) => IPerson | undefined,
    title: string
    agreeRequest?: (id: number, status: string) => void
}

const WorkAbsenseWeekendRegistryForm = ({workAbsenseRegistry, personById, title, agreeRequest}: WorkAbsenseRegistryProps) => {

  const [selectedRequest, setSelectedRequest] = useState()

  const columns: GridColDef[] = [
    {
      field: 'number',
      headerName: 'Номер',
      width: 80,
      editable: false,
    },
    {
      field: 'datetime',
      headerName: 'Дата создания',    
      width: 100,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => 
        `${params.row.create_date} ${params.row.create_time}`
    },
    {
      field: '_person',
      headerName: 'ФИО',
      width: 180,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => {
        const person = personById(params.row.person)
        if (person) return `${person.surname} ${person.name} ${person.patronymic}`
      }          
    },
    {
      field: 'justification',
      headerName: 'Обоснование',    
      width: 200,
      editable: false,
      
    },
    {
      field: 'period_start',
      headerName: 'Начало отсуствия',    
      width: 100,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => 
        `${params.row.absense_date_in} ${params.row.absense_time_in}`
      
    },
    {
      field: 'period_end',
      headerName: 'Окончание отсуствия',    
      width: 140,
      editable: false,
      valueGetter: (params: GridValueGetterParams) => 
        `${params.row.absense_date_out} ${params.row.absense_time_out}`
      
    },
    {
      field: 'status',
      headerName: 'Статус',    
      width: 200,
      editable: false,
      
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

  ];

  const handleAgreeRequest = (status: string) => {
    if (selectedRequest) {
      agreeRequest!(selectedRequest, status)
      system.sendNotification(`Служебная записка переведена в статус "${status}"`, "success")
    }
  }

  return (
    <>
    <Typography variant="h5" sx={{m: 4}}>{title}</Typography>

    <Box sx={{ m: 2, height: 500}}>
      <DataGrid
        rows={workAbsenseRegistry}
        columns={columns}
        pageSize={7}
        onRowClick={(e)=>setSelectedRequest(e.row.id)}         
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
    {
      agreeRequest &&      
      <>
      <Button variant="contained" 
              disabled={!selectedRequest} 
              sx={{ ml: 2, mb: 10 }} 
              onClick={() => handleAgreeRequest("Согласовано руководителем")}
      >
        Cогласовать
      </Button>
      <Button variant="contained" 
              disabled={!selectedRequest} 
              sx={{ ml: 2, mb: 10, background: '#e24826' }} 
              onClick={() => handleAgreeRequest("Не согласовано")}
      >
        Не согласовано
      </Button>
      </>
    }
    </>
    )
}
  
export default WorkAbsenseWeekendRegistryForm;