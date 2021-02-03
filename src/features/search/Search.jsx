import Typography from '@material-ui/core/Typography';
import { searchProduct } from 'api/productApi';
import MainContainer from 'components/MainContainer';
import useDocumentTitle from 'hooks/useDocumentTitle';
import useFetch from 'hooks/useFetch';
import useQueryParameters from 'hooks/useQueryParameters';
import List from './components/List';
import useStyles from './Search.style';

function SearchPage() {
  const classes = useStyles();
  const query = useQueryParameters();
  const keyword = query.get('key');

  const { data, isLoading } = useFetch(['search', keyword], () =>
    searchProduct(keyword)
  );

  useDocumentTitle(`Kết quả tìm kiếm ${keyword} | tuauthentic.com`);

  return (
    <MainContainer sx={{ px: { xs: 1, sm: 3 } }}>
      <Typography component="h2" variant="h6" className={classes.searchText}>
        {isLoading ? (
          <>
            Đang tìm kiếm dữ liệu cho từ khóa &quot;<strong>{keyword}</strong>
            &quot;...
          </>
        ) : (
          <>
            Tìm thấy <strong>{data.length}</strong> kết quả.
          </>
        )}
      </Typography>

      <List products={data} loading={isLoading} />
    </MainContainer>
  );
}

export default SearchPage;
