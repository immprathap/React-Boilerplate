import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import ReactTable from "react-table";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

import customTableStyle from "assets/jss/material-dashboard-pro-react/components/customTableStyle";

class CustomTable extends React.Component {
    state = {
        pageSizeOptions: [100, 500, 1000],
        defaultPageSize: 100
    }

    render() {
        return (
            <ReactTable
                data={this.props.data}
                filterable
                defaultFilterMethod={(filter, row, column) => {
                    const id = filter.pivotId || filter.id;
                    if (typeof filter.value === "object") {
                      return row[id] !== undefined
                        ? filter.value.indexOf(row[id]) > -1
                        : true;
                    } else {
                      return row[id] !== undefined
                        ? String(row[id]).indexOf(filter.value) > -1
                        : true;
                    }
                  }}
                columns={this.props.columns}
                pageSizeOptions={this.state.pageSizeOptions}
                defaultPageSize={this.state.defaultPageSize}
                minRows={3}
                showPaginationTop={false}
                showPaginationBottom
                style={{
                    height: this.props.height
                }}
                className="-striped -highlight"
                getTrProps={(state, rowInfo) => {
                    if (rowInfo && rowInfo.row) {
                        return {
                            onClick: (e) => {
                                this.props.onSelect(rowInfo);
                            },
                            style: {
                                cursor: "pointer",
                                background: rowInfo.index === this.props.selected ? '#00afec' : 'white',
                                color: rowInfo.index === this.props.selected ? 'white' : 'black'
                            }
                        }
                    } else {
                        return {}
                    }
                }}
            />
        );
    }
}

CustomTable.propTypes = {
    classes: PropTypes.object.isRequired,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.arrayOf(PropTypes.array).isRequired,
    selected: PropTypes.number,
    height: PropTypes.number,
    onSelect: PropTypes.func.isRequired
};

export default withStyles(customTableStyle)(CustomTable);
