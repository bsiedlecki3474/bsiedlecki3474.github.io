import { useEffect, useState } from "react";
import { getUsers } from "api/users.js";
import Panel from "./Panel";
import MaterialTable from "components/MaterialTable";


const DataTablePanel = props => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    getUsers().then(response => setUsers(response.data));
  }, [])

  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'username', label: 'Username' },
    { id: 'company', label: 'Company' },
    { id: 'email', label: 'Email' },
    { id: 'website', label: 'Website' }
  ]

  const { DASH } = window;

  const data = users && users.map(row => ({
    name: row.name ? <a onClick={e => {}}>{row.name}</a> : DASH,
    username: row.username,
    company: row.company.name,
    email: row.email ? <a href={'mailto:' + row.email}>{row.email}</a> : DASH,
    website: row.website ? <a target="_blank" href={row.website}>{row.website}</a> : DASH,
  }))

return (
    <Panel title="Data tables">
      <MaterialTable
        title="Users"
        // checkboxes
        columns={columns}
        data={data}
      />
    </Panel>
  )
}

export default DataTablePanel;