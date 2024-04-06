import { useContext } from "react"
import { UserContext } from "../../providers/Usercontext"
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";

export const TechCard = ({tech})=>{
    const {user} = useContext(UserContext)

    return(
        <li>
            <div>
                <p>{user.techs.title}</p>  
            </div>
            <div>
                <p>
                    {user.techs.status}
                </p>
            </div>
            {user.id === tech.userId ? (
                <>
                    <button>
                        <MdOutlineEdit size={30}/>
                    </button>
                    <button>
                        <MdOutlineDelete size={30}/>
                    </button>
                </>
            ):null}
        </li>
    )
}