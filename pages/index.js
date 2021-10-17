import Head from "next/head";
import ContentContainer from "../components/ContentContainer";
import HorizontalScroll from "../components/HorizontalScroller";
import ListItems from "../components/ListItems";
import ListItemsVertical from "../components/ListItemsVertical";
import Welcome from "../components/Welcome";
import data from "../data/list";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Simpl</title>
        <link rel="icon" href="/assets/logocolored.svg" />
      </Head>

      <main>
        <section>
          <Welcome />
        </section>
        <section className="scaled">
          <section>
            <ContentContainer heading={"Recharges & pay bills"}>
              <ListItems items={data.listItems} />
            </ContentContainer>
          </section>
          <section>
            <ContentContainer heading={"You can also use Simpl on"}>
              <HorizontalScroll items={data.horizontalListItems} />
            </ContentContainer>
          </section>
          <section>
            <ContentContainer heading={"Recent transactions"} withoutPadding>
              <ListItemsVertical items={data.verticalList}  />
            </ContentContainer>
          </section>
        </section>
      </main>

    

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        footer {
          width: 100%;
          max-width: inherit;
          height: 56px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          bottom: 0;
        }
        section {
          margin-bottom: 0.8rem;
        }
        .scaled {
          position: relative;
          top: -13vh;
        }
      `}</style>
    </div>
  );
}
