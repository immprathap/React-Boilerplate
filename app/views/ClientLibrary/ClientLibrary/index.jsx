import React from 'react';
import PropTypes from 'prop-types';

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from "material-ui/IconButton";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import FileUpload from "components/CustomUpload/FileUpload";
import IconCard from "components/Cards/IconCard.jsx";
import CustomTable from "components/CustomTable";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import IconButton from "components/CustomButtons/IconButton.jsx";

// icons
import { FaRegClone as GroupIcon } from "react-icons/fa"


import ClientlibraryStyle from "assets/jss/material-dashboard-pro-react/components/firmwareUploadStyle";

class Clientlibrary extends React.Component {

    render() {
        //const { classes } = this.props;
        //console.log(this.props.RepositoryType)
        const actions=(
            <div align="left">
            
                  { /* use this button to add a like kind of action */ }
                  
                  <IconButton
                    onClick={() => {
                      
                    }}
                    // color="dangerNoBackground"
                    customClass="delete">
                    <DeleteIcon />
                  </IconButton>{" "}
                  </div>
    )
        return (
            <GridContainer direction="column" justify="center">
                <ItemGrid>
                        <GridContainer justify="center">
                        <ItemGrid xs={6}>
                            <form>
                           
                                <Grid container direction="column" alignItems="center" justify="center">
                                    <FileUpload />
                                    <br />
                                    <Typography variant="caption">
                                        Note: Select file using browse botton. Valid extensions(jpeg,img,zip,tar,gz)
                        </Typography>
                                </Grid>
                                <br/>
                                <Grid container justify="space-around">
                                    <Grid item xs={11} sm={11} md={10}>
                                <FormControl fullWidth >
                                    <InputLabel shrink={true}  htmlFor="Repository Type">Repository Type</InputLabel>
                                    <Select
                                        style={{ width: 500 }}
                                        value={this.props.RepositoryType}
                                        onChange={this.props.onchangecertificate('RepositoryType')}
                                        inputProps={{
                                        name: 'Repository Type',
                                        id: 'RepositoryType',
                                        }}
                                    >
                                        <MenuItem value="Wallpaper">Wallpaper</MenuItem>
                                        </Select>
                                    </FormControl>
                                    </Grid>
                                    </Grid>
                                <Grid container justify="space-around">
                                    <Grid item xs={11} sm={11} md={10}>
                                        <CustomInput
                                            id="Repository Name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.props.values.repository_name ? this.props.values["repository_name"] : '',
                                                placeholder: "Repository Name",
                                                onChange: this.props.onChange("repository_name")
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={11} sm={11} md={10}>
                                        <CustomInput
                                            id="Description"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: this.props.values.repository_desc ? this.props.values["repository_desc"] : '',
                                                placeholder: "Description",
                                                onChange: this.props.onChange('repository_desc')
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={11} sm={11} md={5} />
                                    <Grid item xs={11} sm={11} md={11}>
                                        <center><Button onClick={this.props.onUpload} color="warning">Upload</Button></center>
                                    </Grid>
                                </Grid>
                            </form>
                        </ItemGrid>
                    </GridContainer>
                </ItemGrid>
                <ItemGrid>
                    <IconCard
                        icon={GroupIcon}
                        title="List of Repositories"
                        iconColor="red"
                        content={

                            <CustomTable columns={[
                                {
                                    Header: "Name",
                                    accessor: "name",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                               placeholder="Search Name"
                                               value={filter ? filter.value : ''}
                                               onChange={event => onChange(event.target.value)}
                                        />
                                      )
                                },
                                {
                                    Header: "Uploaded file",
                                    accessor: "uploadedfile",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                               placeholder="Search Uploaded file"
                                               value={filter ? filter.value : ''}
                                               onChange={event => onChange(event.target.value)}
                                        />
                                      )
                                },
                                {
                                    Header: "Description",
                                    accessor: "description",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                               placeholder="Search Description"
                                               value={filter ? filter.value : ''}
                                               onChange={event => onChange(event.target.value)}
                                        />
                                      )
                                },
                                {
                                    Header: "Uploaded on",
                                    accessor: "uploadedon",
                                    minWidth: 50,
                                    Filter: ({filter, onChange}) => (
                                        <input type='text'
                                               placeholder="Search Uploaded on"
                                               value={filter ? filter.value : ''}
                                               onChange={event => onChange(event.target.value)}
                                        />
                                      )
                                },
                                {
                                    Header: "Actions",
                                    accessor: "actions",
                                    minWidth: 50,
                                    Cell: row => (
                                      actions
                                    ),
                                    
                                }
                            ]}
                                data={this.props.tableData}
                                height="45vh"
                                selected={this.props.tableRowSelected}
                                onSelect={this.props.onSelectTableRow}
                            />
                        }
                    />

                </ItemGrid>

            </GridContainer>
        );
    }
}

Clientlibrary.propTypes = {
    classes: PropTypes.object.isRequired,
    values: PropTypes.array.isRequired,
    tableData: PropTypes.arrayOf(PropTypes.array).isRequired,
    tableRowSelected: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onUpload: PropTypes.func.isRequired,
    onSelectTableRow: PropTypes.func.isRequired
};

export default withStyles(ClientlibraryStyle)(Clientlibrary);