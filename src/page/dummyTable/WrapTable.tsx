import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import IconButton from '../../components/UI/iconButton/IconButton';
import { useTypedSelector } from '../../hook/useTypedSelector';
import { useDeleteTableMutation } from '../../store/api/tableApi';
import css from './WrapTable.module.sass'

const WrapTable = () => {

  const { tables } = useTypedSelector((state) => state.table);

  const [deleteTable] = useDeleteTableMutation();

  const navigate = useNavigate()

  return (
    <     >
      <table className={css.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Birthday</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tables.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.birthday_date}</td>
              <td>{item.phone_number}</td>
              <td>{item.address}</td>
              <td >
                <div className={css.actions}>
                  <IconButton orange
                    onClick={() => navigate(`addTable/${item.id}`)}
                  >
                    Edit
                  </IconButton>
                  <IconButton onClick={() => deleteTable(item.id)}>
                    <FaTrash />
                  </IconButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default WrapTable