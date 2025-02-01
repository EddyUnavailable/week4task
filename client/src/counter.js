/*export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}*/
import { createClient } from "@supabase/supabase-js";


export const supabase= createClient(
  "project url https://jpzbfxptcyxlzmyinrqe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwemJmeHB0Y3l4bHpteWlucnFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxNDQ1NTQsImV4cCI6MjA1MzcyMDU1NH0.V7E7wyfMO7Xs7BBK4aUIVVajI90_dJS8qyODWVE_p0k"
)