import { useParams, useNavigate } from 'react-router-dom';
import CustomButton from '../../components/UI/customButton/CustomButton';
import { useGetListQuery } from '../../store/api/listApi'
import css from './DummyListDetals.module.sass'

const DummyListDetals = () => {

  const { id } = useParams() as { id: string };

  const idNum = parseInt(id, 10)
  const navigate = useNavigate()

  const { data: listDataDetail } = useGetListQuery(idNum)


  return (
    <div className={css.container}>
      <div className={css.body}>
        <p>{listDataDetail?.todo}</p>
        <p>{listDataDetail?.completed}</p>
        <p>{listDataDetail?.userId}</p>
        <CustomButton onClick={() => navigate(-1)}>bask</CustomButton>
      </div>
    </div>
  )
}

export default DummyListDetals