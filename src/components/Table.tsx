import { Student, StudentProps } from "@/types/student"
import { studentsData } from "@/data/studentsData"
import { Profile } from "../components/Profile"



const Row = ({id, active, name, email, avatar, grade1, grade2}: Student) => {
    return (
        <div className="flex flex-row p-3" key={id}>
            <Profile 
                avatar={avatar}
                name={name}
                email={email}        
            />
            <div className="flex-1">{active ? 
                <div className="p-3 bg-green-600 text-white rounded w-min">Active</div> :
                <div className="p-3 bg-red-600 text-white rounded w-min">inative</div>}</div>
            <div className="flex-1">{grade1}</div>
            <div className="flex-1">{grade2}</div>
            <div className="flex-1">{active ? ((grade1 + grade2)/2).toFixed(1) : "--"}</div>
        </div>
    )
}

export const Table = () => {
    return (
        <div className="container mx-auto bg-gray-400">
            <div className="flex p-3 bg-gray-600">
                <div className="flex-3">Name</div>
                <div className="flex-1">Status</div>
                <div className="flex-1">Grade 1</div>
                <div className="flex-1">Grade 2</div>
                <div className="flex-1">Final Grade</div>
            </div>
            {studentsData.map(item => (
                    <Row 
                        id= {item.id}
                        active = {item.active}
                        name = {item.name}
                        email = {item.email}
                        avatar = {item.avatar}
                        grade1 = {item.grade1}
                        grade2 = {item.grade2}
                    />
            ))}
        </div>
    )
}

