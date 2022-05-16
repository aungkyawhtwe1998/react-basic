import {useSelector} from 'react-redux'

export default function ZCompo() {
    const account = useSelector(state => state.account)
  return (
    <div>
        <h1>Z Compo</h1>
        <h4>{account}</h4>

    </div>
  )
}
