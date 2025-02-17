export function useFlowbite(callback:Function) {
  if (process.client) {
    import("flowbite").then((flowbite) => {
      callback(flowbite);
    });
  }
}
