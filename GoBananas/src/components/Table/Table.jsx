import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import "./ProductTable.css";

const ProductTable = ({ products }) => {
  return (
    <TableContainer component={Paper} sx={{maxWidth:'800'}} >
      <Table>
        <TableHead sx={{ backgroundColor: '#f5f5f5',fontSize:"1.5rem" }}>
          <TableRow>
            <TableCell className='table-cell-head'sx={{fontSize:"1.2rem",fontWeight:'bold'}}>ID</TableCell>
            <TableCell className='table-cell-head'sx={{fontSize:"1.2rem",fontWeight:'bold'}}>Name</TableCell>
            <TableCell className='table-cell-head'sx={{fontSize:"1.2rem",fontWeight:'bold'}}>Price</TableCell>
            <TableCell className='table-cell-head'sx={{fontSize:"1.2rem",fontWeight:'bold'}}>Category</TableCell>
            <TableCell className='table-cell-head'sx={{fontSize:"1.2rem",fontWeight:'bold'}}>Brand</TableCell>
            <TableCell className='table-cell-head'sx={{fontSize:"1.2rem",fontWeight:'bold'}}>Rating</TableCell> 
            <TableCell className='table-cell-head'sx={{fontSize:"1.2rem",fontWeight:'bold'}} >Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}>
              <TableCell >{product.id}</TableCell>
              <TableCell className="table-cell" sx={{fontSize:"1.2rem",color:'purple'}}>{product.title}</TableCell>
              <TableCell className='table-cell'sx={{fontSize:"1.2rem",color:'purple'}}>{product.price}</TableCell>
              <TableCell className='table-cell'sx={{fontSize:"1.2rem",color:'purple'}}>{product.category}</TableCell>
              <TableCell className='table-cell'sx={{fontSize:"1.2rem",color:'purple'}}>{product.brand}</TableCell>
              <TableCell className='table-cell'sx={{fontSize:"1.2rem",color:'purple'}}>{product.rating}</TableCell>
              <TableCell className='table-cell'sx={{fontSize:"1.2rem",color:'purple'
               }}>
                <img className='product-image' src={product.images[0]} alt="image"/>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
