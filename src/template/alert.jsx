import React from 'react'
import If from './if'

export default props => (
  <If test={props.showAlert}>
    <div className="alert alert-success" role="alert">
        Sua pesquisa retornou o pokemon {props.name}
    </div>
  </If>
)