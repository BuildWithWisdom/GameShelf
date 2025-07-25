import { useSearchParams } from "react-router";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination"

export default function NextPrevPage({nextPage, prevPage, totalPages}) {
    const [searchParams] = useSearchParams();
    const currentPage = searchParams.get('page')
    return (
        <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious to={`?page=${prevPage}`} />
    </PaginationItem>
    { currentPage > 1 &&
        <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    }
    <PaginationItem>
      <PaginationLink to='?page=1' isActive>{currentPage}</PaginationLink>
    </PaginationItem>
    { totalPages > currentPage &&
        <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    }
    <PaginationItem>
      <PaginationNext to={`?page=${nextPage}`} />
    </PaginationItem>
  </PaginationContent>
</Pagination>
    )
}
