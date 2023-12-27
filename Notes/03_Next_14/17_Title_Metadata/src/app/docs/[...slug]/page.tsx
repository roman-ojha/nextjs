export default function Docs({ params }: { params: { slug: string[] } }) {
  //
  if (params.slug.length === 1) {
    // http://localhost:3000/docs/feature1
    return <h1>Viewing docs for feature {params.slug[0]}</h1>;
  }
  if (params.slug.length === 2) {
    // http://localhost:3000/docs/feature1/concept1
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  }
  if (params.slug.length === 3) {
    // http://localhost:3000/docs/feature1/concept1/example1
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}{" "}
        and example {params.slug[2]}
      </h1>
    );
  }
  return <h1>Docs home page</h1>;
}

// Optional Catch all segments: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments
// Catch-all Segments can be made optional by including the parameter in double square brackets: [[...folderName]].
// For example, app/shop/[[...slug]]/page.js will also match /shop, in addition to /shop/clothes, /shop/clothes/tops, /shop/clothes/tops/t-shirts.
