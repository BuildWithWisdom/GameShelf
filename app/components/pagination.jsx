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

export default function NextPrevPage({nextPage, prevPage}) {
    const [searchParams] = useSearchParams();
    const currentPage = searchParams.get('page')
    return (
        <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious to={`?page=${prevPage}`} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink to='?page=1' isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink to='?page=2'>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink to='?page=3'>3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink to='?page=4'>4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink to='?page=5'>5</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink to='?page=7'>7</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink to='?page=8'>8</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink to='?page=9'>9</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink to='?page=10'>10</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext to={`?page=${nextPage}`} />
    </PaginationItem>
  </PaginationContent>
</Pagination>
    )
}