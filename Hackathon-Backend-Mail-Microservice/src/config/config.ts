export const config = {
    mailSetting: {
        auth: {
            pass: 'fsetest@123',
            user: 'sudhakarfse@gmail.com'
        },
        emailBody: `<table style="width: 487.5pt;" width="0">
        <tbody>  
        <tr style="background: #"></tr>      
        <tr>        
        <td style="padding: 0in 0in 0in 0in;">        
        <table style="width: 100.0%;" width="100%">        
        <tbody>        
        <tr>        
        <td style="padding: 0in 0in 0in 0in;">        
        <table style="width: 100.0%;" width="100%">        
        <tbody>       
        <tr>
        <td style="background: #0904f9; padding: 11.25pt 15pt;text-align:center">
        <p><span style="font-size: 18.5pt; font-family: 'Segoe UI',sans-serif; color: #fff;"><strong>Cognizant</strong></span></p>
        </td>
        </tr> 
        <tr>        
        <td style="background: #DEF2F6; padding: 11.25pt 15.0pt 11.25pt 15.0pt;">        
        <p><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #636363;">Hi <strong><span style="font-family: 'Segoe UI',sans-serif;">{LastName} {FirstName},</span></strong></span></p>        
        </td>        
        </tr>        
        <tr>        
        <td style="background: white; padding: 11.25pt 15.0pt 11.25pt 15.0pt;">        
        <p><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #636363;">Thank you for your interest to volunteer for <strong>{EventTitle}</strong>. Please find below the details of the event.</span></p>        
        <p><strong><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #636363;">Date: </span></strong><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #636363;">{Date}</span></p>        
        <p><strong><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #636363;">Time: </span></strong><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #636363;">{Time}</span></p>        
        <p><strong><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #636363;">Event Description: </span></strong><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #636363;">{EventDescription}</span></p>        
        <p><strong><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #636363;">Transport provided: </span></strong><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #636363;">{TransportBoardingType}</span></p>        
        <p><strong><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #636363;">Venue: </span></strong><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #636363;">{BenificiaryName}</span></p>        
        </td>        
        </tr>        
        <tr>        
        <td style="background: white; padding: 11.25pt 15.0pt 11.25pt 15.0pt;">        
        <p><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #29383e;">For more details on this event please contact : <a href="mailto:{PocId}@cognizant.com"><strong>{PocId}</strong></a></span></p>        
        </td>
        </tr>        
        <tr>        
        <td style="background: white; padding: 11.25pt 15.0pt 11.25pt 15.0pt;">        
        <p><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #636363;">If you are unable to make it to the event, please <a href="https://onecognizantapps.cognizant.com/383/Pages/EventInformation.aspx?EventID=EVNT00049627"><strong><span style="color: red;">click here</span></strong></a> to unregister.</span></p>        
        </td>        
        </tr>        
        <tr>        
        <td style="padding: 0in 0in 0in 0in;">&nbsp;</td>        
        </tr>        
        <tr>        
        <td style="padding: 0in 0in 0in 0in;">&nbsp; </td>        
        </tr>        
        <tr>        
        <td style="background: white; padding: 11.25pt 15.0pt 11.25pt 15.0pt;">        
        <p><strong><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #29383e;">Thank You,</span></strong><span style="font-size: 10.5pt; font-family: 'Segoe UI',sans-serif; color: #29383e;"><br /><strong><span style="font-family: 'Segoe UI',sans-serif;">Outreach.</span></strong> </span></p>        
        </td>        
        </tr>        
        </tbody>        
        </table>        
        </td>        
        </tr>        
        </tbody>        
        </table>        
        </td>        
        </tr>        
        <tr>        
        <td style="background: #F7F7F7; padding: 11.25pt 15.0pt 11.25pt 15.0pt;">        
        <p><span style="font-size: 9.0pt; font-family: 'Segoe UI',sans-serif; color: #3e4c51;">** This is an Auto Generated Mail. Please Do not reply to this mail**</span></p>        
        </td>        
        </tr>        
        </tbody>        
        </table>`,
        from: 'sssudhakar1985@gmail.com',
        host: 'smtp.gmail.com',
        service: 'gmail',
        subject: 'Event registered successfully'
    }
};
