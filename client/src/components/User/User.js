import AvatarBar from './AvatarBar';
import EditBar from './EditBar';

function User( {usersId , setUsersId } ) {

    return (
        <>
            <AvatarBar usersId={usersId} setUsersId={setUsersId}/>

            <EditBar usersId={usersId}/>
        
        </>
    )

}

export default User


