import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, GridValueSetterParams } from '@mui/x-data-grid';
import { IVisitorRequest } from "../../../interfaces/interfaces";

const localizedTextsMap = {
  // Root
  noRowsLabel: 'Нет строк',
  noResultsOverlayLabel: 'Данные не найдены.',
  errorOverlayDefaultLabel: 'Обнаружена ошибка.',
  // Density selector toolbar button text
  toolbarDensity: 'Высота строки',
  toolbarDensityLabel: 'Высота строки',
  toolbarDensityCompact: 'Компактная',
  toolbarDensityStandard: 'Стандартная',
  toolbarDensityComfortable: 'Комфортная',
  // Columns selector toolbar button text
  toolbarColumns: 'Столбцы',
  toolbarColumnsLabel: 'Выделите столбцы',
  // Filters toolbar button text
  toolbarFilters: 'Фильтры',
  toolbarFiltersLabel: 'Показать фильтры',
  toolbarFiltersTooltipHide: 'Скрыть фильтры',
  toolbarFiltersTooltipShow: 'Показать фильтры',
  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Поиск…',
  toolbarQuickFilterLabel: 'Поиск',
  toolbarQuickFilterDeleteIconLabel: 'Очистить',
  // Export selector toolbar button text
  toolbarExport: 'Экспорт',
  toolbarExportLabel: 'Экспорт',
  toolbarExportCSV: 'Скачать в формате CSV',
  toolbarExportPrint: 'Печать',
  toolbarExportExcel: 'Скачать в формате Excel',
  // Columns panel text
  columnsPanelTextFieldLabel: 'Найти столбец',
  columnsPanelTextFieldPlaceholder: 'Заголовок столбца',
  columnsPanelDragIconLabel: 'Изменить порядок столбца',
  columnsPanelShowAllButton: 'Показать все',
  columnsPanelHideAllButton: 'Скрыть все',
  // Filter panel text
  filterPanelAddFilter: 'Добавить фильтр',
  filterPanelDeleteIconLabel: 'Удалить',
  // filterPanelLinkOperator: 'Logic operator',
  filterPanelOperators: 'Операторы',
  // TODO v6: rename to filterPanelOperator
  filterPanelOperatorAnd: 'И',
  filterPanelOperatorOr: 'Или',
  filterPanelColumns: 'Столбцы',
  filterPanelInputLabel: 'Значение',
  filterPanelInputPlaceholder: 'Значение фильтра',
  // Filter operators text
  filterOperatorContains: 'содержит',
  filterOperatorEquals: 'равен',
  filterOperatorStartsWith: 'начинается с',
  filterOperatorEndsWith: 'заканчивается на',
  filterOperatorIs: 'равен',
  filterOperatorNot: 'не равен',
  filterOperatorAfter: 'больше чем',
  filterOperatorOnOrAfter: 'больше или равно',
  filterOperatorBefore: 'меньше чем',
  filterOperatorOnOrBefore: 'меньше или равно',
  filterOperatorIsEmpty: 'пустой',
  filterOperatorIsNotEmpty: 'не пустой',
  filterOperatorIsAnyOf: 'любой из',
  // Filter values text
  filterValueAny: 'любой',
  filterValueTrue: 'истина',
  filterValueFalse: 'ложь',
  // Column menu text
  columnMenuLabel: 'Меню',
  columnMenuShowColumns: 'Показать столбцы',
  columnMenuFilter: 'Фильтр',
  columnMenuHideColumn: 'Скрыть',
  columnMenuUnsort: 'Отменить сортировку',
  columnMenuSortAsc: 'Сортировать по возрастанию',
  columnMenuSortDesc: 'Сортировать по убыванию',
  columnHeaderFiltersLabel: 'Показать фильтры',
  columnHeaderSortIconLabel: 'Сортировать',
  // Total row amount footer text
  footerTotalRows: 'Всего строк:',
  checkboxSelectionHeaderName: 'Выбор флажка',
  // Boolean cell text
  booleanCellTrueLabel: 'истина',
  booleanCellFalseLabel: 'ложь',
  // Actions cell more text
  actionsCellMore: 'ещё',
  // Column pinning text
  pinToLeft: 'Закрепить слева',
  pinToRight: 'Закрепить справа',
  unpin: 'Открепить',
  // Tree Data
  treeDataGroupingHeaderName: 'Группа',
  treeDataExpand: 'показать дочерние элементы',
  treeDataCollapse: 'скрыть дочерние элементы',
  // Grouping columns
  groupingColumnHeaderName: 'Группа',
  expandDetailPanel: 'Развернуть',
  collapseDetailPanel: 'Свернуть' 

};

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

    <Box sx={{ m: 2, height: 400}}>
      <DataGrid
        rows={visitors}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}        
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