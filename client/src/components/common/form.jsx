
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import React from 'react'
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

function CommonForm({ formControls, formData, setFormData, onSubmit, buttonText, isButtonDisabled, isButtonDisablingOnEdit }) {





    const renderInputsByComponentType = (getControl) => {
        let element = null;
        const value = formData[getControl.name];
        switch (getControl.componentType) {
            case "input":
                element = <Input name={getControl.name} placeholder={getControl.placeholder} id={getControl.name} type={getControl.type} value={value} onChange={(e) => setFormData({ ...formData, [getControl.name]: e.target.value })} />
                break;
            case "textarea":
                element = <Textarea name={getControl.name} placeholder={getControl.placeholder} id={getControl.name} type={getControl.type} value={value} onChange={(e) => setFormData({ ...formData, [getControl.name]: e.target.value })} />
                break;
            case "select":
                element = (
                    <Select value={value} onValueChange={(value) => setFormData({ ...formData, [getControl.name]: value })}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={getControl.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                getControl.options &&
                                getControl.options.length > 0 &&
                                getControl.options.map((option) =>
                                    <SelectItem value={option.id} key={option.id}>
                                        {option.label}
                                    </SelectItem>
                                )
                            }
                        </SelectContent>
                    </Select>
                )
                break;
            default:
                element = <input name={getControl.name} placeholder={getControl.placeholder} id={getControl.name} type={getControl.type} value={value} onChange={(e) => setFormData({ ...formData, [getControl.name]: e.target.value })} />

                break;
        }
        return element;
    }
    return (
        <form onSubmit={onSubmit}>
            <div className='flex flex-col gap-3'>
                {
                    formControls.map((control) => {
                        return (
                            <div className='grid w-full gap-1.5' key={control.name}>
                                <label className='mb-1'>{control.label}</label>
                                {renderInputsByComponentType(control)}
                            </div>
                        )
                    })
                }
            </div>
            <Button disabled={isButtonDisablingOnEdit} type="submit" className="mt-2 w-full">{buttonText || "Submit"}</Button>
        </form>
    )
}

export default CommonForm
