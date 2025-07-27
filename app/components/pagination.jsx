import { useSearchParams } from "react-router";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

export default function NextPrevPage({ nextPage, prevPage, totalPages }) {
  const [searchParams] = useSearchParams();

const build = (p) => {
  const next = new URLSearchParams(searchParams);
  next.set("page", String(p));
  return `?${next}`;
};
  const currentPage = Number(searchParams.get("page") || 1);
  return (
    <Pagination>
      <PaginationContent>
        {prevPage &&
        <PaginationItem>
           
          <PaginationPrevious to={build(prevPage)} />
        </PaginationItem>
}
        {prevPage && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink to={`?${currentPage}`} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {nextPage && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {nextPage && (
        <PaginationItem>
          <PaginationNext to={build(nextPage)} />
        </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
