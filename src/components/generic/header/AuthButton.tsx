import { BsPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const AuthButton = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <div className={`${isMobile ? "flex" : "hidden lg:flex"} lg:justify-end`}>
            <Link to="">
                <button
                    className="bg-red-100 hover:bg-red-200 flex justify-center items-center lg:shadow p-2 lg:p-3 lg:rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                    <BsPersonFill className="h-4 w-auto flex-shrink-0 text-red-400" />
                    <span className="lg:pl-1">
                        Connexion
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default AuthButton