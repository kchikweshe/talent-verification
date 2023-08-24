import { Box, Grid, TextField } from "@mui/material";
import EmployeeAutoCompleteSearchField, { GenericAutoCompleteSearchField } from "./components/generic-autocomple-search-field";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styles from './search-page.module.css'
import { Company } from "./data/company.model";
import { Department, Role } from "./data/employee.model";
import EmployeeDataGrid from "./components/employee.data-grid";

export const SearchPage = () => {

    return (
        <main className={styles.main}>
            <div>
                <p>
                    <h1>Search Employees</h1>
                    <section className={styles.section}>
                        <Box sx={{ flexGrow: 1 }} >
                            <Grid rowGap={5} container spacing={2} >
                                <Grid xs={4} md={4}>
                                    {EmployeeAutoCompleteSearchField('name', [])}

                                </Grid>
                                <Grid xs={4} md={4}>
                                    {GenericAutoCompleteSearchField<Company>("Search by company", "company", [])}

                                </Grid>
                                <Grid xs={4} md={4}>
                                    {GenericAutoCompleteSearchField<Department>("Search by department", "department", [])}

                                </Grid>
                                <Grid xs={4} md={4}>
                                    {GenericAutoCompleteSearchField<Role>("Search by role", "role", [])}

                                </Grid>
                                <Grid xs={4} md={4}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="Date joined"
                                            defaultValue={dayjs('2023-08-22')
                                            }

                                        />
                                    </LocalizationProvider>

                                </Grid>
                                <Grid xs={4} md={4}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                                        <DatePicker
                                            label="Date left"
                                            defaultValue={dayjs('2023-08-22')
                                            }

                                        />
                                    </LocalizationProvider>

                                </Grid>
                            </Grid>
                        </Box>

                    </section>

                    <p>
                    <section>
                        {/* DataGrid of employees */}
                        {EmployeeDataGrid()}
                    </section>
                    </p>
            
                </p>
            </div>

        </main>
    );
}