import React from 'react';
import { Container, PaginateBtn } from './PaginationObj.styled';

const PaginationObj = ({
    filteredImages,
    imagesPerPage,
    currentPage,
    paginate,
}) => {
    return (
      <Container>  
            {filteredImages?.length > imagesPerPage && (
            <>
                <PaginateBtn
                    disabled={currentPage === 1}
                    value={'<'}
                    id={'previousPage'} 
                    onClick={() => paginate(currentPage - 1)}
                />
                {Array(Math.ceil(filteredImages.length / imagesPerPage))
                    .fill()
                    .map((_, index) => (
                        <PaginateBtn
                            value={index + 1}
                            currentIndex={currentPage}
                            key={index}
                            onClick={() => paginate(index + 1)}
                        />
                    ))}
                <PaginateBtn
                    disabled={
                        currentPage === Math.ceil(filteredImages.length / imagesPerPage)
                    }
                    value={'>'}
                    id={'nextPage'} // Use a different prop name instead of key
                    onClick={() => paginate(currentPage + 1)}
                >
                    {`>`}
                </PaginateBtn>
            </>
        )}
        </Container>
    );
};

export default PaginationObj;
