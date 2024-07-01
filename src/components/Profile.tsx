import { profileProps } from "@/types/profileProps"

export const Profile = ({avatar, name, email}: profileProps) => {
    return (
        <div className="flex flex-3">
            <img className="w-10 h-10 rounded-full mr-5" src={avatar}/>
            <div>
                <div className="">{name}</div>
                <div className="">{email}</div>
            </div>
        </div>
    )
}