import React from "react"
import "../../CSS/Home.css"
import "../../CSS/Rooms.css"
import MathJson from "../../JSON/MathBooks.json"
const Math = () => {
  let books = Object.entries(MathJson.books).map(book => {
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
        {this.props.icon && <img className="book-img" src={this.props.icon} />}
        {this.props.link && <a href={this.props.link} className="center button">Read</a>}
      </div>
    )
  }
}


export default Math
