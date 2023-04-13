// import { RecipeList } from './RecipeList';
// import recipes from '../recipes.json';
import user from '../user.json';
import { Profile } from './Profile/Profile';
// console.log(user);
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 16,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <RecipeList items={recipes} /> */}
    </div>
  );
};
