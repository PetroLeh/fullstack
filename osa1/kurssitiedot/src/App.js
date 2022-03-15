const Header = (props) => {
    return (
        <h1>{props.header}</h1>
    )
}

const Content = (props) => {
    return (
        <>
        <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
        </>
    )
}

const Total = (props) => {
    let total = 0
    props.parts.forEach(part => {
        total = total + part.exercises
    })
    return (
        <>
        <p>Number of exercises {total}</p>
        </>

    )
}
const Part = (props) => {
    return (
        <p>{props.name} {props.exercises}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
 
    const parts = [
    {
        name: 'Fundamentals of React',
        exercises: 10
    },
    {
        name: 'using props to pass data',
        exercises: 7
    },
    {
        name: 'State of a component',
        exercises: 14
    }
]

    return (
        <div>
            <Header header={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}
  
export default App