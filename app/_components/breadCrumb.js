  import Link from "next/link";
  
  export default function BreadCrumb({exercise}) {
    return (
        <nav
        style={{
          "--bs-breadcrumb-divider": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E\")",
        }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/categorias">
              Categorías
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {/* { data.id == exercise.category_id ? data.name : 'no ' } */}
          </li>
        </ol>
      </nav>
    );
  };
  
