import { useNavigate } from "react-router-dom";


export default function AdminLogin({ update, login }) {
    const navigate = useNavigate();

    const onLoginSubmit = async (e) => {
        e.preventDefault();
        navigate("/dashboard/home")
    }

    return (
        <div className='mt-32 p-8 h-screen w-full mx-auto rounded overflow-hidden'>
            <div className='transition duration-300 ease-in-out hover:scale-110 border border-2 max-w-sm mx-auto justify-center shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                <form onSubmit={onLoginSubmit} className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <h2 className='text-4xl font-bold text-center py-6 font-mono flex justify-center'>Groccery <img src="https://cdn-icons-png.flaticon.com/512/3724/3724763.png" alt="plant image" className='w-10 pl-2' /></h2>
                    <div className='flex flex-col py-2'>
                        <label>Username</label>
                        <input className='border p-2' type="text" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <input className='border p-2' type="password" />
                    </div>
                    <div className='mt-2 mb-0 flex justify-between'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    </div>
                    <button type="submit" className='border w-full mt-2 mb-10 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>
                </form>
            </div>
        </div>
    )
}
