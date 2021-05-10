import { useParams } from 'umi';

export default () => {
  const params = useParams();
  return (
    <div>
      <ul>
        <li>params: {JSON.stringify(params)}</li>
      </ul>
    </div>
  );
};