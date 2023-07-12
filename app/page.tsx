import { Button } from "./components/button";
import { CellphoneListContextProvider } from "./context/cellphone-list.context";
import { CopyAllButton } from "./components/copy-all-button";
import { Form } from "./components/form";
import { Notifications } from "./components/notifications";
import { NotificationsContextProvider } from "./context/notifications.context";
import { ResultsTable } from "./components/results-table";

export default function Home() {
  return (
    <>
      <main className="h-screen grid grid-cols-2 relative">
        <NotificationsContextProvider>
          <CellphoneListContextProvider>
            <Form className="flex flex-col flex-wrap">
              <div className="flex-1 p-4">
                <label htmlFor="cellphone-list" className="block">
                  <span className="block text-sm font-medium text-slate-700">
                    Ingresá la lista de teléfonos
                  </span>
                  <textarea
                    className="w-full h-full"
                    style={{ height: "calc(100vh - 185px)" }}
                    name="cellphone-list"
                    id="cellphone-list"
                  />
                </label>
                <label htmlFor="prefix" className="block">
                  <span className="block text-sm font-medium text-slate-700 mt-2">
                    Agregar prefijo
                  </span>
                  <select name="prefix">
                    <option value="">Ninguno</option>
                    <option value="9">9</option>
                    <option value="549">549</option>
                    <option value="+549">+549</option>
                  </select>
                </label>
              </div>
              <div className="flex justify-between p-4">
                <Button color="red" type="reset">
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
          </CellphoneListContextProvider>
          <Notifications />
        </NotificationsContextProvider>
      </main>
    </>
  );
}
