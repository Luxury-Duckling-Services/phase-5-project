import AvatarBar from './AvatarBar';
import EditBar from './EditBar';

function User( {userId , viewingId , setUser} ) {

    return (
        <>
        <AvatarBar userId={userId} viewingId={viewingId} setUser={setUser} />

        <EditBar />
        </>
    )

}

export default User


