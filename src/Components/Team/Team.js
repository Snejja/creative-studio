import styles from './Team.module.css';

const Team = () => {
  const team = [
    {
      id: '28a4c449-e030-4bf4-be01-bbc1163cdd5d',
      name: 'Tom Jones',
      position: 'Creative Director',
      text: 'Create with simplicity in mind!',
      photo: 'c960fbfd-92ff-4892-84ef-7e90f01ca1af',
    },
    {
      id: '914d660d-43a6-4c22-bcef-1629e783902e',
      name: 'Michael Fraup',
      position: 'Creative Director',
      text: 'Create with simplicity in mind!',
      photo: '3ad13adc-cee7-459f-8925-b371fbf581aa',
    },
    {
      id: '46114776-0d75-4c82-81fb-3c4a37be9820',
      name: 'Tim Cahill',
      position: 'Creative Director',
      text: 'Create with simplicity in mind!',
      photo: 'c5e7fe14-fb37-4885-934d-4d620364b0df',
    },
  ];

  return (
    <div className={styles.team}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <p className={styles.title}>The Team</p>
          <div className={styles.gap} />
        </div>
        <div className={styles.containers}>
          {team.map((person) => (
            <div
              className={styles.container}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/files/${person.photo}.png)`,
              }}
              key={person.id}
            >
              <div className={styles.filling}>
                <h1 className={styles.name}>{person.name}</h1>
                <div className={styles.gapCenter} />
                <p className={styles.position}>{person.position}</p>
                <p className={styles.text}>{person.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Team;
