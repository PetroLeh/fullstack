const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
}

const Content = (props) => {
    const parts = props.course.parts
    return (
        <>
        <Part name={parts[0].name} exercises={parts[0].exercises} />
        <Part name={parts[1].name} exercises={parts[1].exercises} />
        <Part name={parts[2].name} exercises={parts[2].exercises} />
        </>
    )
}

const Total = (props) => {
    let total = 0
    props.course.parts.forEach(part => {
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
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}
  
export default App