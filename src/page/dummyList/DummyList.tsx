import { useNavigate } from 'react-router-dom'
import { useGetListsWithPaginationQuery } from '../../store/api/listApi'
import css from './DummyList.module.sass'

const DummyList = () => {

  const { data: listData } = useGetListsWithPaginationQuery({})

  const navigate = useNavigate()

  return (
    <div className={css.container}>
      {listData?.todos.map((item) => (
        <div key={item.id}
          onClick={() => navigate(`${item.id}`)}
        >
          <p className={css.parag}>{item.todo}</p>
        </div>
      ))}
    </div>
  )
}

export default DummyList