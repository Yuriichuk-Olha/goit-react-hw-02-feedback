import Feedback from './Feedback/Feedback'

export const App = ({children}) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    
      <Feedback />
      {children}
    </div>
  );
};
