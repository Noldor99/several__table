import css from './DummyTable.module.sass'
import WrapPagination from './WrapPagination'
import WrapTable from './WrapTable';

const DummyTable = () => {


  return (
    <div className={css.container}>
      <div>
        <div>
        </div>
        <WrapTable />
      </div>
      <div>
        <WrapPagination />
      </div>
    </div>
  )
}

export default DummyTable