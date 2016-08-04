
//var datatable = require(["../js/react/fixed-data-table.min"]);
//import {Table, Column, Cell} from datatable;
//
//var MyCompi=React.createClass({
//	getInitialState: function() {
//		return{ rows : [
//			{"id":1,"first_name":"William","last_name":"Elliott","email":"welliott0@wisc.edu","country":"Argentina","ip_address":"247.180.226.89"},
//			{"id":2,"first_name":"Carl","last_name":"Ross","email":"cross1@mlb.com","country":"South Africa","ip_address":"27.146.70.36"},
//			{"id":3,"first_name":"Jeremy","last_name":"Scott","email":"jscott2@cbsnews.com","country":"Colombia","ip_address":"103.52.74.225"}
//		]};
//	},
//	render:function(){
//	return(
//		<Table
//			height={this.state.rows.length * 300}
//			width={1150}
//			rowsCount={this.state.rows.length}
//			rowHeight={30}
//			headerHeight={30}
//			rowGetter={rowIndex => this.state.rows[rowIndex]}>
//
//			<Column dataKey="id" width={50} label="Id" />
//			<Column dataKey="first_name" width={200} label="First Name" />
//			<Column dataKey="last_name" width={200} label="Last Name" />
//		</Table>
//	  );
//  }
//});
//ReactDOM.render(<MyCompi/>,
//document.getElementById('tabledata')
//);


import React from '../js/react';
import ReactDOM from '../js/react-dom';
import {Table, Column, Cell} from '../js/react/fixed-data-table';

// Table data as a list of array.
const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  // .... and more
];

// Render your table
ReactDOM.render(
  <Table
    rowHeight={50}
    rowsCount={rows.length}
    width={5000}
    height={5000}
    headerHeight={50}>
    <Column
      header={<Cell>Col 1</Cell>}
      cell={<Cell>Column 1 static content</Cell>}
      width={2000}
    />
    <Column
      header={<Cell>Col 2</Cell>}
      cell={<MyCustomCell mySpecialProp="column2" />}
      width={1000}
    />
    <Column
      header={<Cell>Col 3</Cell>}
      cell={({rowIndex, ...props}) => (
        <Cell {...props}>
          Data for column 3: {rows[rowIndex][2]}
        </Cell>
      )}
      width={2000}
    />
  </Table>,
  document.getElementById('tabledata')
);