import React, { Component } from 'react';

class TOC extends Component {

  render() {
    var lists = [];
    var data = this.props.data
    var i = 0
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            // data-id={data[i].id}   // dataset을 이용하는 방법
            // onClick={function (e) {
            //   e.preventDefault()
            //   this.props.onChangePage(e.target.dataset.id)
            // }.bind(this)}
            onClick={function (id, e) {  // bind함수에 인자를 추가하는 방법
              e.preventDefault()
              this.props.onChangePage(id)
            }.bind(this, data[i].id)}
          >{data[i].title}</a>
        </li>
      );
      i++;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;
