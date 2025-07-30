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

  // Builds the URL for the next or previous page.
  const build = (p) => {
    const next = new URLSearchParams(searchParams);
    next.set("page", String(p));
    return `?${next}`;
  };
  const currentPage = Number(searchParams.get("page") || 1);
  return (
    <Pagination>
      <PaginationContent>
        {/* Renders the previous page button if there is a previous page. */}
        {prevPage && (
          <PaginationItem>
            <PaginationPrevious to={build(prevPage)} />
          </PaginationItem>
        )}
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
        {/* Renders the next page button if there is a next page. */}
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
