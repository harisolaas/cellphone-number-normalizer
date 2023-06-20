import { Button } from "./components";
import { AppContextProvider } from "./context";
import { CopyAllButton } from "./copy-all-button";
import { Form } from "./form";
import { ResultsTable } from "./results-table";

export default function Home() {
  return (
    <>
      <main className="h-screen grid grid-cols-2">
        <AppContextProvider>
          <Form className="flex flex-col flex-wrap">
            <div className="flex-1 p-4">
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Ingresá la lista de teléfonos
                </span>
                <textarea
                  className="w-full h-full"
                  style={{ height: "calc(100vh - 135px)" }}
                  name="cellphone-list"
                  id="cellphone-list"
                />
              </label>
            </div>
            <div className="flex justify-between p-4">
              <Button color="secondary" type="reset">
                Borrar
              </Button>
              <Button type="submit">Convertir</Button>
            </div>
          </Form>
          <div className="h-screen overflow-scroll p-4 pb-20">
            <ResultsTable />
            <div className="w-1/2 absolute bottom-0 right-0 p-4 mx-auto bg-[#dbe2ef]">
              <CopyAllButton />
            </div>
          </div>
        </AppContextProvider>
      </main>
    </>
  );
}
