const Header = (props) => {
    return (
        <h1>{props.header}</h1>
    )
}

const Content = (props) => {
    return (
        <>
        <Part name={props.part1.name} exercises={props.part1.exercises} />
        <Part name={props.part2.name} exercises={props.part2.exercises} />
        <Part name={props.part3.name} exercises={props.part3.exercises} />
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
 
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }

    const part2  = {
        name: 'using props to pass data',
        exercises: 7
    }

    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    const parts = [part1, part2, part3]

    return (
        <div>
            <Header header={course} />
            <Content part1={part1} part2={part2} part3={part3} />
            <Total parts={parts} />
        </div>
    )
}
  
export default App