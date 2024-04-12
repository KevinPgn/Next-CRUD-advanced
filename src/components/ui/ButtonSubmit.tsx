import { useFormStatus } from "react-dom"
import { Button } from "./button"

export const ButtonSubmit = () => {
  const {pending} = useFormStatus()
  
  return <>
    <Button variant="outline" disabled={pending} type="submit">
      {
        pending ? 'Submitting...' : 'Submit'
      }
    </Button>
  </>
}