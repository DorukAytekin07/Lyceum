import React from "react"
import "../../CSS/Home.css"
import "../../CSS/Rooms.css"
import APJson from "../../JSON/APBooks.json"
const AP = () => {
  let books = Object.entries(APJson.books).map(book => {
    return (book[1].map(variable => {
      return (
        <Book {...variable}></Book>
      )
    })
    )
  })
  return (
    <div className="home-page-div">
      <div className="shelf">
        {books}
      </div>
    </div>
  )
}

class Book extends React.Component {
  render() {
    return (
      <div className={this.props.title ? "title-container" : "book-container"}>
        {this.props.title && <h1 className="title">{this.props.title}</h1>}
        <div className="container">
          {this.props.icon && <img className="book-img" src={this.props.icon} />}
          
          {this.props.icon && <div className={this.props.colour + ' ' + 'top-left' + ' ' + 'size'}>{this.props.status}</div>}
        </div>
        {this.props.link && <a href={this.props.link} target="_blank" className="center button">Read</a>}
      </div>
    )
  }
}


export default AP
